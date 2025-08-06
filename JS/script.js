// console.log("hello");
// let h=document.createElement('h1');
// h.innerHTML="hello";
// console.log(h);
function fun()
{
    let container = document.getElementById('table-area');
    container.setAttribute('style', 'display: flex; justify-content: center; align-items: center;');
    let row=document.getElementById('row').value;
    let col=document.getElementById('col').value;
    let table=document.createElement('table');
    table.setAttribute('border','2');
    for(let i=1;i<=row;i++)
    {
        let tr=document.createElement('tr');
        for(let j=1;j<=col;j++)
        {
            let td = document.createElement('td');
            tr.appendChild(td);
            if(i==1&& j==1)
            {
                let Image=document.createElement('img');
                Image.setAttribute("src","../images/king.png");
                Image.style.width = '100%';
                Image.style.height = '100%';
                td.appendChild(Image);
            }
            if(i%2==0)
            {
                if(j%2==0)
                {
                    td.setAttribute('style', 'background-color: black;');
                }
                else{
                    td.setAttribute('style', 'background-color: white;');
                }
            }
            else
            {
                if(j%2==0)
                {
                    td.setAttribute('style', 'background-color: white;');
                }
                else{
                    td.setAttribute('style', 'background-color: black;');
                }
            }
            td.style.width = '100px';
            td.style.height = '110px';
            td.style.padding = '0';
        }
        table.appendChild(tr);
    }
    table.setAttribute("width","50%");
    table.setAttribute("cellpadding","70");
    // document.getElementsByTagName('body')[0].appendChild(table);
    container.appendChild(table);
    document.body.appendChild(container);
}
let kingRow = 1;
let kingCol = 1;
function move(direction) {
    const table = document.querySelector('#table-area table');
    if (!table) return;

    const rows = table.rows.length;
    const cols = table.rows[0].cells.length;

    // 🔍 Find current position of king image
    let kingRow = -1;
    let kingCol = -1;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = table.rows[i].cells[j];
            if (cell.querySelector('img')) {
                kingRow = i;
                kingCol = j;
                break;
            }
        }
        if (kingRow !== -1) break;
    }

    if (kingRow === -1 || kingCol === -1) return; // King not found

    // 🧭 Determine new position
    let newRow = kingRow;
    let newCol = kingCol;

    if (direction === 'left' && kingCol > 0) newCol--;
    if (direction === 'right' && kingCol < cols - 1) newCol++;
    if (direction === 'up' && kingRow > 0) newRow--;
    if (direction === 'down' && kingRow < rows - 1) newRow++;

    // 🧼 Remove king from old cell
    table.rows[kingRow].cells[kingCol].innerHTML = '';

    // 👑 Add king to new cell
    const img = document.createElement('img');
    img.src = '../images/king.png';
    img.style.width = '100%';
    img.style.height = '100%';
    table.rows[newRow].cells[newCol].appendChild(img);
}
