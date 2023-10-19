document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.querySelector('.cards-container');

  fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
    .then(res => res.json())
    .then(posts => {
      posts.forEach(post => {
        const card = `
					<div class="col-4 u-equal-height">
						<div class="p-card u-display-flex">
							<h5 class="category-name"></h5>
							<hr class="separator">
							<img class="p-card__image" src="" alt="Featured Image">
							<div class="p-card__inner u-flex-grow">
								<h3><a href=""></a></h3>
								<p><em>By <a href=""></a> on </em></p>
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
