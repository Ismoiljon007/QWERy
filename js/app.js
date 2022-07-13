// TODO burger sections styles

const showBtn = document.getElementById('show-btn')
const hiddenNav = document.querySelector('.hidden-nav')
const overlay = document.getElementById('overlay')

showBtn.addEventListener('click', () => {
    hiddenNav.classList.toggle('show-nav')
    overlay.classList.toggle('hidden')
})

window.addEventListener('resize' , () => {
    if (window.innerWidth > 791) {
        hiddenNav.classList.remove('show-nav')
        overlay.classList.add('hidden')
    }
})

overlay.addEventListener('click', ()=>{
    hiddenNav.classList.remove('show-nav')
    overlay.classList.add('hidden')
})




// TODO modal sections styles

const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const clickBtn = document.getElementById('click-btn')


const addHidden = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const removeHidden = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
clickBtn.addEventListener('click', removeHidden)
closeBtn.addEventListener('click', addHidden)
overlay.addEventListener('click', addHidden)

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        addHidden()
      }
})