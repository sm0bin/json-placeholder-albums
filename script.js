const showData = (data, isShowAll) => {
    if (!isShowAll) {
        data = data.slice(0, 12);
    }
    const main = document.getElementById("main");
    data.forEach(element => {
        const fig = document.createElement("figure");
        fig.className = "relative";
        fig.innerHTML =
            `
            <img class="w-full  rounded-xl h-64 object-cover" src="${element.url}" alt="">
            <div class="absolute w-full left-0 bottom-0 bg-white/70 p-3 rounded-b-xl">
                <h2 class="capitalize font-bold text-2xl">${element.title}</h2>
            </div>
            `;
        main.appendChild(fig);
    });
}

const fetchData = async (isShowAll) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const json = await res.json();
    showData(json, isShowAll);
}

fetchData();

document.getElementById("see-more").addEventListener("click", () => {
    fetchData(true);
})

