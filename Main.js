let SHEET_ID = '1mVjKJoLqBuJrIK0F7ZxUi7n1sjcd4PD30IXZrnHqGBk'
let SHEET_TITLE = 'Sheet1';
let SHEET_RANGE = 'A2:C7'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

console.log('aa');

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    console.log('aa');
    let data = JSON.parse(rep.substr(47).slice(0,-2));

    console.log({data});

    // let player_Name_title = document.getElementById('player_Name_title');
    // let player_Shoe_title = document.getElementById('player_Shoe_title');
    // let player_Name = document.getElementById('player_Name');
    let player_Shoe = document.getElementById('player_Shoe');
    let length = data.table.rows.length;


    // player_Name_title.innerHTML = data.table.rows[0].c[0].v;
    // player_Shoe_title.innerHTML = data.table.rows[0].c[1].v;
    // let selectOptionPlayer = document.createElement('select');
    // player_Name.append(selectOptionPlayer);

    for(let i = 0;i<length;i++){

        // let NewBoxPlayer = document.createElement('option');
        // NewBoxPlayer.id = ("box"+i);
        // NewBoxPlayer.className = "Some_Style";
        // selectOptionPlayer.append(NewBoxPlayer);
        // NewBoxPlayer.innerHTML = data.table.rows[i].c[0].v;

        let NewBoxShoeDay = document.createElement('span');
        NewBoxShoeDay.id = ("box"+i);
        NewBoxShoeDay.className = "Some_Style";
        player_Shoe.append(NewBoxShoeDay);
        NewBoxShoeDay.innerHTML = data.table.rows[i].c[0].v; 

        let NewBoxShoeSpan = document.createElement('span');
        NewBoxShoeSpan.id = ("box"+i);
        NewBoxShoeSpan.className = "Some_Style";
        player_Shoe.append(NewBoxShoeSpan);
        NewBoxShoeSpan.innerHTML = data.table.rows[i].c[1].v; 

        let NewBoxShoeSpan2 = document.createElement('span');
        NewBoxShoeSpan2.id = ("box"+i);
        NewBoxShoeSpan2.className = "Some_Style";
        player_Shoe.append(NewBoxShoeSpan2);
        NewBoxShoeSpan2.innerHTML = data.table.rows[i].c[2].v; 

        // let NewBoxShoe = document.createElement('div');
        let space = document.createElement('hr');
        let space2 = document.createElement('hr');
        // NewBoxShoe.id = ("box"+i);
        // NewBoxShoe.className = "Some_Style";
        // player_Shoe.append(NewBoxShoe);
        player_Shoe.append(space);
        player_Shoe.append(space2);
        // NewBoxShoe.innerHTML = data.table.rows[i].c[1].v; 

        // let NewBoxShoe3 = document.createElement('div');
        // let space3 = document.createElement('hr');
        // let space4 = document.createElement('hr');
        // NewBoxShoe3.id = ("box"+i);
        // NewBoxShoe3.className = "Some_Style";
        // player_Shoe.append(NewBoxShoe3);
        // player_Shoe.append(space3);
        // player_Shoe.append(space4);
        // NewBoxShoe3.innerHTML = data.table.rows[i].c[1].v; 

    }
 
}).catch((err) => {
    console.log('errrr', err);
})
