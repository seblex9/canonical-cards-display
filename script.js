document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.querySelector('.cards-container');

  fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
    .then(res => res.json())
    .then(posts => {
      posts.forEach(post => {
        const date = new Date(post.data);
        const formattedDate = `${date.getDate()} ${date.toLocaleString(
          'default',
          { month: 'long' }
        )} ${date.getFullYear}}`;
        const cardImage = post.featured_media;
        const authorName = post['_embedded']['author'][0]['name'];
        const authorLink = post['_embedded']['author'][0]['link'];
        const categoryName =
          post['_embedded']?.['wp:term']?.[2]?.[0]?.['name'] || 'UNCATEGORIZED';
        const fullPostLink = post.link;
        const postTitle = post.title.rendered;

        const card = `
					<div class="col-4 u-equal-height">
						<div class="p-card u-display-flex">
							<h5 class="category-name">${categoryName}</h5>
							<hr class="separator">
							<img class="p-card__image" src="${cardImage}" alt="Featured Image">
							<div class="p-card__inner u-flex-grow">
								<h3><a href="${fullPostLink}">${postTitle}</a></h3>
								<p><em>By <a href="${authorLink}">${authorName}</a> on </em></p>
							</div>
							<hr class="separator">
							<div class="p-card__footer">
								<p>Article</p>
							</div>
						</div>
					</div>
				`;
        cardsContainer.innerHTML += card;
      });
    });
});
