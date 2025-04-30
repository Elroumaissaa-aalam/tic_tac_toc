let arrey = [null, null, null, null, null, null, null, null, null]

let tawazone = document.getElementById('tike_take')
let test = document.getElementById('smiya')
let tarja3e = document.getElementById('t3awid')
let btn = document.getElementsByClassName('border2')
let karwa = 'X'
let lbadya = true
test.textContent = `daba nobte ${karwa}`


tawazone.querySelectorAll('.border2').forEach((e, index) => {
    e.addEventListener('click', () => {

        if (!lbadya || arrey[index] !== null) {
            return
        }
        arrey[index] = karwa;
        e.textContent = karwa;

        if (liayrba7e()) {
            lbadya = false
            test.textContent = `mone ${karwa} rba7e`
            
            ta7yade()
            

        } else if (arrey.every(c => c)) {
            test.textContent = "waaaw t3adalto"
            lbadya = false
            ta7yade()
        }

        if (karwa === "X") {
            karwa = "O"
test.textContent = `daba nobte ${karwa}`

        } else {
            karwa = "X"

test.textContent = `daba nobte ${karwa}`
        }

   
    });
});
const ta7yade = () => {
    btn.forEach(e => {
        e.style.pointerEvents = "none"
    })
}

const liayrba7e = () => {
 
    if (arrey[0] === karwa && arrey[3] === karwa && arrey[6] === karwa) {
        return true;
    }
    if (arrey[0] === karwa && arrey[4] === karwa && arrey[8] === karwa) {
        return true;
    }
    if (arrey[0] === karwa && arrey[1] === karwa && arrey[2] === karwa) {
        return true;
    }
    if (arrey[1] === karwa && arrey[4] === karwa && arrey[7] === karwa) {
        return true;
    }
    if (arrey[2] === karwa && arrey[5] === karwa && arrey[8] === karwa) {
        return true;
    }
    if (arrey[2] === karwa && arrey[4] === karwa && arrey[6] === karwa) {
        return true;
    }

    if (arrey[3] === karwa && arrey[4] === karwa && arrey[5] === karwa) {
        return true;
    }
    if (arrey[6] === karwa && arrey[7] === karwa && arrey[8] === karwa) {
        return true;
    }


    return false;
}
const t3awid = () => {
    karwa = 'X'
    arrey = [null, null, null, null, null, null, null, null, null]
    lbadya = true
    tawazone.querySelectorAll('.border2').forEach(e => {
        e.textContent = ''
    });
}

tarja3e.addEventListener('click', t3awid);



