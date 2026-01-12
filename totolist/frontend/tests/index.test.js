/**
 * @jest-environment jsdom
 */

require('jest')

let prenom, error, form, localstock

beforeEach(() => {
    jest.resetModules()
    document.body.innerHTML = `<form id = "form-prenom" class = "grid py-2 gap-2 border-2 px-10 rounded-xl 2xl:py-5 2xl:gap-10 2xl:flex">
            <label for = "prenom" class = "flex items-center">Veuillez entrer votre prénom</label>
            <input type = "text" name = "prenom" id = "prenom" class = "bg-white border-1 rounded-xl px-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <button id = "btn-prenom" class = "bg-white font-semibold px-6 py-3 rounded-xl border-1 hover:text-indigo-600">Voir la liste des tâches</button>
            <p id ="attention-prenom" class = "flex items-center text-red-600"></p>
        </form>`
    prenom = document.getElementById('prenom')
    error = document.getElementById('attention-prenom')
    form = document.getElementById('form-prenom')

    require ('../scriptindex.js')
})

test('affiche message erreur si pas de prenom renseigné', () => {
    prenom.value = 'ab'

    form.dispatchEvent(new Event ('submit'))

    expect(error.innerText).toBe(`Merci de saisir au moins 3 caractères pour le prénom`)

})

test('renseigne le nom dans le local storage si prenom OK', () => {
    prenom.value = 'prenomtest'

    form.dispatchEvent(new Event ('submit'))

    localstock = localStorage.getItem('prenom')

    expect(localstock).toBe(prenom.value)

})