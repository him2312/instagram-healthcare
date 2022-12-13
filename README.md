
# Instagram

  Requirements:

### Responsive Instagram-esque grid feed
- Used Flexbox along with media-queries to make it responsive. 

### Unlimited scrolling
- Fetch 10 posts
- On scroll, once user scrolls 90% of the page, make an API call to fetch next 10 posts.
- This ensures infinite scroll for the user.
- On slow internet connection, <b>Loading...</b> will be shown.

### Mark your favorite image as favorite
- Once user clicks on ❤️, the image metadata is saved to localStorage to persist.
- User can go to <b>View Liked Photos</b> to see all the photos they have liked.

### Universal Search by image tags, author, etc
- Using Unsplash's search API to query for images with user search.

### Caching
- Using in memory cache to save data based on key `query+page`.
- If the API response already exists for this query and page combo, we can avoid making the API call and serve directly from this.
### Snappy and fast image loading
- prefetching images might backfire, till user doesn't reach that image.
- Once image is about to enter the view port, we fetch next set of images.
- Used thumb images from the urls array to load the smallest size of image.
### Server side rendering
- Used NextJS to ensure server side rendering.
### Unit testing
- Used React Testing Library and Jest to write unit test cases
### Typescript
- This was new for me, so I hope I've done justice.