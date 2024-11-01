// Selects all faq-dropdowns
const vieFaq = document.querySelectorAll(
	'.vie-faq .vie-faq-question-wrapper'
);

// Adds event listener to all faq-dropdowns
for ( let i = 0; i < vieFaq.length; i++ ) {
	vieFaq[ i ].addEventListener( 'click', openCurrAccordion );
}

// Opens current faq-dropdown
function openCurrAccordion() {
	for ( let i = 0; i < vieFaq.length; i++ ) {
		const parent = vieFaq[ i ].parentElement;
		const child = vieFaq[ i ].nextElementSibling;

		if ( this === vieFaq[ i ] && ! parent.classList.contains( 'open' ) ) {
			parent.classList.add( 'open' );
			child.style.maxHeight = child.scrollHeight + 'px';
		} else {
			parent.classList.remove( 'open' );
			child.style.maxHeight = '0px';
		}
	}
}
