// ------------Selecting Elments-----------------------
const form = document.querySelector('.form_data');
const u_name = document.querySelector('.u_name');
const u_cc = document.querySelector('.u_cc');
const check_box = document.querySelector('.check_box');

// -------------- Finding Properties--------------------- 
// u_name.addEventListener('input', (e)=>console.log(e));
// target -- name, checked, value

// form_data.addEventListener('input', (e)=>console.log('pressed',e.target.name));


// -------------------- Logic -----------------------------
const form_data = {}
for(let input of [u_name, u_cc, check_box]){
    // if added event of change result would only appear ? lostFocus || EnterKey
    input.addEventListener('input', (e)=>{
        const {name, value, type, checked} = e.target;
        form_data[name] = type === 'checkbox' ? checked : value;
        // form_data[name] = value;
    })
}

// -------------- Creating Element ---------------------
const p = document.createElement('p');

p.innerText = 'Open Console and type form_data to access information works when you have something in input';

const a = document.createElement('a');
a.setAttribute('href', 'https://github.com/DevDuckling');
a.innerText = 'Dev Duckling';

form.append(p,a);

// --------------build complete---------------------