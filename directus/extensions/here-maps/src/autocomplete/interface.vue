<template>
  <div>
    <div v-if="state.step === 1">
        <VInput v-model="state.searchText" @keydown="(event) => event.keyCode === 13 && searchForSuggestions()"/>
        <div class="actions list">
          <VButton @click="searchForSuggestions">
            Standort suchen
          </VButton>
        </div>
    </div>
    <div v-if="state.step === 2">
      <VInfo
          v-if="state.loading"
          title="Loading"
          icon="sync"
      >
        Lade alle Vorschläge...
      </VInfo>
      <div v-else>
        <VFancySelect
          v-model="state.selectedSuggestion"
          :items="state.suggestionsToDisplay">
        </VFancySelect>
        <VButton @click="resetSearch">
          Zurück zur Suche
        </VButton>
      </div>
    </div>
    <div v-if="state.step === 3">
      <VCard>
        <VCardTitle>
          {{ value ? value.title : '' }}
        </VCardTitle>
        <VCardText>
          Alle Addressfelder wurden automatisch ausgefüllt. Bitte überprüfen Sie die Angaben.
          Für eine neue Suche klicken Sie auf den Button unten.
        </VCardText>
        <VCardActions>
          <VButton @click="resetSearch">
            Neue Suche
          </VButton>
        </VCardActions>
      </VCard>
    </div>
  </div>
</template>

<script>
import {computed, defineComponent, reactive, watch} from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Object,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Search for a location...',
    },
    country_ref: {
      type: String,
    },
    state_ref: {
      type: String,
    },
    county_ref: {
      type: String,
    },
    city_ref: {
      type: String,
    },
    district_ref: {
      type: String,
    },
    street_ref: {
      type: String,
    },
    houseNumber_ref: {
      type: String,
    },
    postcode_ref: {
      type: String,
    },
    countryCode_ref: {
      type: String,
    },
    languageCode_ref: {
      type: String,
    },
    locationId_ref: {
      type: String,
    },
    latitude_ref: {
      type: String,
    },
    longitude_ref: {
      type: String,
    },
    point_ref: {
      type: String,
    }
  },
  emits: ['input'],
  setup(props, { emit }) {
    const state = reactive({
      step: props.value ? 3 : 1,
      searchText: props.value ? props.value.title : '',
      suggestions: [],
      selectedSuggestion: props.value || null,
      suggestionsToDisplay: computed(() => {
        return state.suggestions.map((suggestion) => {
          return {
            icon: "pin_drop",
            value: suggestion,
            text: suggestion.title,
          }
        })
      }),
      loading: false,
    })

    function searchForSuggestions() {
      fetchSuggestions(state.searchText)
      state.step = 2
    }
    function setFieldValue(field, value) {
      // setTimeout is needed as a workaround for a bug in Directus
      // If the value is set immediately, only the last value is saved
      setTimeout(() => {
        emit('setFieldValue', { field, value })
      }, 1)
    }
    function selectSuggestion() {
      emit('update:modelValue', state.selectedSuggestion.title)
      emit('input', state.selectedSuggestion)

      setFieldValue(props.street_ref, `${state.selectedSuggestion.address.street} ${state.selectedSuggestion.address.houseNumber}`)
      setFieldValue(props.state_ref, state.selectedSuggestion.address.state)
      setFieldValue(props.county_ref, state.selectedSuggestion.address.county)
      setFieldValue(props.city_ref, state.selectedSuggestion.address.city)
      setFieldValue(props.country_ref, state.selectedSuggestion.address.countryName)
      setFieldValue(props.district_ref, state.selectedSuggestion.address.district)
      setFieldValue(props.postcode_ref, state.selectedSuggestion.address.postalCode)
      setFieldValue(props.countryCode_ref, state.selectedSuggestion.address.countryCode)
      setFieldValue(props.latitude_ref, state.selectedSuggestion.position.lat)
      setFieldValue(props.longitude_ref, state.selectedSuggestion.position.lng)
      setFieldValue(props.locationId_ref, state.selectedSuggestion.id)
      setFieldValue(props.locationId_ref, state.selectedSuggestion.id)
      setFieldValue(props.point_ref, {
        "type": "Point",
        "coordinates": [
          state.selectedSuggestion.position.lng,
          state.selectedSuggestion.position.lat
        ]
      })


      state.searchText = state.selectedSuggestion.title
      state.step = 3
    }
    async function fetchSuggestions(query) {
      if (!query) {
        state.suggestions = []
        return
      }

      state.loading = true
      try {
        const response = await fetch(`/here-api/autocomplete?query=${encodeURIComponent(query)}`)
        const data = await response.json()
        state.suggestions = data.items || []
      } catch (error) {
        console.error('Error fetching suggestions:', error)
        this.suggestions = []
      }

      state.loading = false
    }

    function resetSearch() {
      state.step = 1
      state.selectedSuggestion = null
    }


    watch(
      () => props.value,
      (newValue) => {
        console.log('new value', newValue)
        state.searchText = newValue ? newValue.title : ''
        state.step = newValue ? 3 : 1
      },
        {once: true}
    )

    watch(
      () => state.selectedSuggestion,
      () => {
        if (state.selectedSuggestion === null) {
          return
        }
        selectSuggestion()
        state.step = 3
      }
    )

    return {
      state,
      searchForSuggestions,
      resetSearch
    }
  },
})
</script>

<style scoped>
.actions.list {
  margin-top: 8px;
}
</style>