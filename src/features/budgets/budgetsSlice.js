import { createSlice } from '@reduxjs/toolkit'; 

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState, 
  reducers: {
    editBudget: (state, action) => {
      const newBudgets = state.map(budge => {
        if(budge.category === action.payload.category) {
          return action.payload; 
        }
        return budge; 
      })
      return newBudgets; 
    }
  }
});

export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
