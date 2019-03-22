const planBreadcrumbItem = document.getElementById("planBreadcrumb");
planBreadcrumbItem.style.display = "none";

document.getElementById("planSelectMenu").addEventListener("click", (e) => {
    planBreadcrumbItem.style.display = "inline-flex";
    planBreadcrumbItem.innerHTML = "";

    // Get click item innerHTML
    let target = e.target || e.srcElement;
    let planItem = target.innerHTML;

    if(target.parentElement.id == "planSelectMenuLi"){
        planBreadcrumbItem.innerHTML += `
            <li class="breadcrumb-item">${planItem}</li>
        `;
    }
    else{
        let headTitle = target.parentElement.parentElement.firstElementChild.innerHTML;
        planBreadcrumbItem.innerHTML += `
            <li class="breadcrumb-item">${headTitle}</li>
            <li class="breadcrumb-item">${planItem}</li>
        `;
    }
    
});