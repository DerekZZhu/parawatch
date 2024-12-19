'use server'

import { redirect } from "next/dist/server/api-utils";
import { saveWatch } from "./watches";


function isInvalidText(text) {
    return !text || text.trim() == ""
}
export async function shareMeal(prevState, formData) {
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      post: formData.get('post'),
      user: formData.get('name'),
      image: formData.get('image'),
      user_email: formData.get("email")
    }

    if (isInvalidText(meal.title) || 
        isInvalidText(meal.summary) || 
        isInvalidText(meal.post) ||
        isInvalidText(meal.user) ||
        isInvalidText(meal.user_email) 
    ) {
        throw new Error("Hey you forgot to fill out an input!")
    }
    console.log(meal);
    await saveWatch(meal)
    // redirect("/watch")
  }