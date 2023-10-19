# Canonical Cards Display

A web project that fetches and displays blog posts from Canonical in a card-based UI, utilizing Vanilla Framework for styling.

## Overview

The application fetches posts from a provided JSON API, parses the response, and displays each post as a card. Each card showcases information such as the category, featured image, post title, author, and date.

## Features

- **Responsive Design**: The cards are displayed in a grid format which is responsive. They stack up in a columnar layout on smaller screens.
- **Error Handling**: In cases where some data might be missing, defaults are provided. For example, if a blog post doesn't have an associated category, it will default to 'UNCATEGORIZED'.

## Important Notes

- The `type` property in the fetched JSON represents the type of content. Even though this property returns the value "post", for the sake of remaining faithful to the original instructions provided, the text "Article" is hard coded in the footer.

- There is an inconsistency in the JSON data: The third blog post does not include a category. To handle this, chaining was implemented to set a default value. Without this, the loop omits rendering of the third card.

- Note the JSON provides the same image ("employee spotlight") for both the first and third posts.
