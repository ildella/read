import {redirect} from '@sveltejs/kit'

export function load () {
  // const {home} = await parent()
  // console.log({home})
  redirect(302, '/read/articles')
}
