'use client'

import ImagePicker from '@/components/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/action';
import WatchFormSubmit from '@/components/watch-formsubmit';
import { useFormState } from 'react-dom';

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, {message: null})

  return (
    <>
      <header className={classes.header}>
        <h1>
          Create a Parawatch <span className={classes.highlight}>thread</span>
        </h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="post">Post Content</label>
            <textarea
              id="post"
              name="post"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="your image" name="image"/>
          {
            state.message && <p>{state.message}</p>
          }
          <p className={classes.actions}>
            <WatchFormSubmit/>
          </p>
        </form>
      </main>
    </>
  );
}