function addJobContent() {
    fetch("../data/job-content.json")
        .then(res => res.json())
        .then(data => {
            let d = document.getElementById("vieclam");
            let re = "";
            for (let c of data) {
                re += `  <div class="flex">
                <div class="noidung">
                    <h1>${c.name}</h1>
                    <p>${c.noidung}</p>
                    <button class="btn">${c.btn}</button>
                </div>
                <div>
                    <img src="../background1_files/${c.img}" alt="" class="img">
                </div>
            </div>`;
            }

            d.innerHTML += re;
        })

}






window.onload = function () {
    addJobContent();

};