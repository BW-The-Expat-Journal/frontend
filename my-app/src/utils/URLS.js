
export const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://sj-mh-expat-journal.herokuapp.com/'
// get - For Registration attempts
export const REGISTER_PATH = '/createnewuser'
// get - For Login attempts
export const LOGIN_PATH = '/login'
// get - list of users
export const USERS_PATH = '/users/users'
export const INFO_PATH = '/users/userinfo'
export const ID_PATH = '/users/user/{userid}'
// get - list of current listings
// get - items by id - must append the item id
// put - update user by id - must append the item id
// delete - delete item by id - must append the item id
export const STORIES_PATH = '/stories/stories'
// post - add a listing - must append the user's id
export const NEW_STORY_PATH = '/stories/story'
// delete stories by adding {storyid}
// update stories by adding {storyid}
export const PHOTO_PATH = '/photos/photos'

export const PHOTOID_PATH = '/photos/photo/{photoid}'
// deletes photos by adding {photoid}
export const NEWPHOTO_PATH = '/photos/photo/story/{storyid}'


