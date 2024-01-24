import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getAllCountries = createAsyncThunk(
  'countries/getAllCountries',
  async () => {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const json = await res.json()

    return json
  }
)

export const getCountriesByRegion = createAsyncThunk(
  'countries/getCountriesByRegion',
  async ({ region }) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const json = await res.json()

    return json
  }
)

const initialState = {
  data: [],
  loading: false,
  mode: "light"
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        console.log("Loading...")
        state.loading = true;
      })
      .addCase(getAllCountries.fulfilled, (state, { payload }) => {
        console.log("Loading Data successful")
        state.loading = false;
        state.data = payload;
      })
      .addCase(getAllCountries.rejected, (state) => {
        console.log("Loading Data failed")
        state.loading = false;
      })
      .addCase(getCountriesByRegion.pending, (state) => {
        console.log("Loading...")
        state.loading = true;
      })
      .addCase(getCountriesByRegion.fulfilled, (state, { payload }) => {
        console.log("Loading Data successful")
        state.loading = false;
        state.data = payload;
      })
      .addCase(getCountriesByRegion.rejected, (state) => {
        console.log("Loading Data failed")
        state.loading = false;
      })
  }
})

export const selectCountries = state => state.countries.data

const { changeMode } = countriesSlice.actions

export const countriesReducer = countriesSlice.reducer