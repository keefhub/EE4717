
function productreport() {
    const reportcontainer1 = document.getElementById("reporttable1");

    jj = 0;
    cal = 0;
    cal1 = 0;
    cal2 = 0;
    cap = 0;
    cap1 = 0;
    cap2 = 0;

    fetch("getorders.php")
    .then(response => response.json())
    .then((orders) => {
        orders.forEach(order => {
            jj += parseInt(order.jj);
            cal1 += parseInt(order.calsingle);
            cal2 += parseInt(order.caldouble);
            cal += parseInt(order.calsingle) + parseInt(order.caldouble);
            cap1 += parseInt(order.capsingle);
            cap2 += parseInt(order.capdouble);
            cap += parseInt(order.capsingle) + parseInt(order.capdouble);
            });

        jjdollar = parseFloat(jj) * 2;
        caldollar = parseFloat(cal1 * 2) + parseFloat(cal2 * 3);
        capdollar = parseFloat(cap1 * 4.75) + parseFloat(cap2 * 5.75);
        
        reportcontainer1.style.display = "inline";
        reportcontainer1.innerHTML = `
            <tr>
            <th>Product</th>
            <th>Total Dollar Sales</th>
            <th>Quantity Sales</th>
            </tr>
            <tr>
            <td>Just Java</td>
            <td>$${jjdollar}</td>
            <td>${jj}</td>
            </tr>
            <tr>
            <td>Cafe Au Lait</td>
            <td>$${caldollar}</td>
            <td>${cal}</td>
            </tr>
            <tr>
            <td>Iced Cappucino</td>
            <td>$${capdollar}</td>
            <td>${cap}</td>
            </tr>
            `;
    })
}

function categoryreport() {
    const reportcontainer2 = document.getElementById("reporttable2");

    jj = 0;
    cal = 0;
    cal1 = 0;
    cal2 = 0;
    cap = 0;
    cap1 = 0;
    cap2 = 0;
    single = 0;
    double = 0;

    fetch("getorders.php")
    .then(response => response.json())
    .then((orders) => {
        orders.forEach(order => {
            jj += parseInt(order.jj);
            cal1 += parseInt(order.calsingle);
            cal2 += parseInt(order.caldouble);
            single += parseInt(order.calsingle) + parseInt(order.capsingle);
            cap1 += parseInt(order.capsingle);
            cap2 += parseInt(order.capdouble);
            double += parseInt(order.caldouble) + parseInt(order.capdouble);
            });

        jjdollar = parseFloat(jj) * 2;
        singledollar = parseFloat(cal1 * 2) + parseFloat(cap1 * 4.75);
        doubledollar = parseFloat(cal2 * 3) + parseFloat(cap2 * 5.75);
        
        reportcontainer2.style.display = "inline";
        reportcontainer2.innerHTML = `
            <tr>
            <th>Category</th>
            <th>Total Dollar Sales</th>
            <th>Quantity Sales</th>
            </tr>
            <tr>
            <td>Null</td>
            <td>$${jjdollar}</td>
            <td>${jj}</td>
            </tr>
            <tr>
            <td>Single</td>
            <td>$${singledollar}</td>
            <td>${single}</td>
            </tr>
            <tr>
            <td>Double</td>
            <td>$${doubledollar}</td>
            <td>${double}</td>
            </tr>
            `;
    })
}

function popularitem() {

    jj = 0;
    cal1 = 0;
    cal2 = 0;
    cap1 = 0;
    cap2 = 0;

    console.log("it works");

    fetch("getorders.php")
    .then(response => response.json())
    .then((orders) => {
        orders.forEach(order => {
            jj += parseInt(order.jj);
            cal1 += parseInt(order.calsingle);
            cal2 += parseInt(order.caldouble);
            cap1 += parseInt(order.capsingle);
            cap2 += parseInt(order.capdouble);
            });

        

        if (jj >= Math.max(cal1, cal2, cap1, cap2)) {
            popitem(1);
        }
        else if (cal1 >= Math.max(jj, cal2, cap1, cap2)) {
            popitem(2);
        }
        else if (cal2 >= Math.max(jj, cal1, cap1, cap2)) {
            popitem(3);
        }
        else if (cap1 >= Math.max(jj, cal1, cal2, cap2)) {
            popitem(4);
        }
        else if (cap2 >= Math.max(jj, cal1, cal2, cap1)) {
            popitem(5);
        };
    })
}

function popitem(coffee) {
    const category = document.getElementById("popularcat");
    const type = document.getElementById("populartype");

    console.log("it works");

    if (coffee == 1) {
        category.innerHTML = `NULL`;
        type.innerHTML = `Just Java`;
    }
    else if (coffee == 2) {
        category.innerHTML = `Single`;
        type.innerHTML = `Cafe Au Lait`;
    }
    else if (coffee == 3) {
        category.innerHTML = `Double`;
        type.innerHTML = `Cafe Au Lait`;
    }
    else if (coffee == 4) {
        category.innerHTML = `Single`;
        type.innerHTML = `Iced Cappucino`;
    }
    else if (coffee == 5) {
        category.innerHTML = `Single`;
        type.innerHTML = `Iced Cappucino`;
    }
}