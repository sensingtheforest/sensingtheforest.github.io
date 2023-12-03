// annotated contents of: _data/eleventyComputed.js
// source: https://www.brycewray.com/posts/2022/12/drafts-timestamp-based-publishing-eleventy/

/*
	First, we decide whether to enable these features in **both** production and development modes or in **only** production.
	For this `bothModes` variable, `true` means both modes and `false` means prod-only.
	I've selected `true` because I like testing it locally.
*/
let bothModes = true

/*
	Now, we define the constant which checks whether a content file is a "future file," by comparing the file's `date` timestamp with the current date/time --- i.e., `Date.now()`.
*/
const isPageFromFuture = ({ date }) =>
	date.getTime() > Date.now()

/*
	Finally, we determine whether the file is OK to publish --- i.e., whether it gets assigned a permalink *and* can be part of any Eleventy collections (the latter matters for things like automated posts lists).
	The file must be *neither* a future file *nor* a draft file to be published.
	We wrap this test within a conditional which uses the `bothModes` selection.
*/
if (bothModes) {
	// prod and dev modes
	module.exports = {
		// permalink: (data) => {
		// 	const { permalink, page } = data
		// 	if (isPageFromFuture(page) || data.draft) {
		// 		return false
		// 		// no permalink assigned
		// 	}
		// 	return permalink
		// },
		eleventyExcludeFromCollections: (data) => {
			const { eleventyExcludeFromCollections, page } = data
			if (isPageFromFuture(page) || data.draft) {
				return true
				// excluded from collections
			}
			return eleventyExcludeFromCollections
		},
	}
} else {
	// prod only
	module.exports = {
		// permalink: (data) => {
		// 	const { permalink, page } = data
		// 	if (process.env.ELEVENTY_ENV === "production" && (isPageFromFuture(page) || data.draft)) {
		// 		return false
		// 		// no permalink assigned
		// 	}
		// 	return permalink
		// },
		eleventyExcludeFromCollections: (data) => {
			const { eleventyExcludeFromCollections, page } = data
			if (process.env.ELEVENTY_ENV === "production" && (isPageFromFuture(page) || data.draft)) {
				return true
				// excluded from collections
			}
			return eleventyExcludeFromCollections
		},
	}
}
