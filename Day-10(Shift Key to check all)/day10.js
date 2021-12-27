const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('start check')
            }
            if (inBetween) {
                checkbox.checked = true
            }

        })
    }
    lastChecked = this;
}