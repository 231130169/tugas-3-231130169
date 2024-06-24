function searchKoridor() {
    const input = document.getElementById('koridor-search');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('koridor-table');
    const trs = table.getElementsByTagName('tr');
 
    for (let i = 1; i < trs.length; i++) {
        const tds = trs[i].getElementsByTagName('td');
        let display = false;
 
        for (let j = 0; j < tds.length; j++) {
            if (tds[j].textContent.toLowerCase().indexOf(filter) > -1) {
                display = true;
                break;
            }
        }
 
        trs[i].style.display = display ? '' : 'none';
    }
}
