const ATTACK_VALUE = 5

const chosenMaxLife = 100

let currentMonsterHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

attackHandler = () => {
    const damage = dealMonsterDamage(ATTACK_VALUE)
    currentMonsterHealth -= damage
}

attackBtn.addEventListener('click', attackHandler)