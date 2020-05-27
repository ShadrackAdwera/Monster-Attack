const ATTACK_VALUE = 10

const MONSTER_ATTACK_VALUE = 15

const STRONG_ATTACK_VALUE = 14

const chosenMaxLife = 100

let currentMonsterHealth = chosenMaxLife

let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

attackMonster = (mode) => {
    let monsterDamage;
    if(mode==='NORMAL_ATTACK'){
        monsterDamage = ATTACK_VALUE
    } else if(mode==='STRONG_ATTACK') {
        monsterDamage = STRONG_ATTACK_VALUE
    }

    const damage = dealMonsterDamage(monsterDamage)
    currentMonsterHealth -= damage
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage
    if(currentMonsterHealth<=0 && currentPlayerHealth>0){
        alert('You won!')
    } else if (currentPlayerHealth<=0 && currentMonsterHealth>0) {
        alert('SMH! LOSER!')
    } else if(currentPlayerHealth<=0 && currentMonsterHealth<=0) {
        alert('You have a draw!')
    }

}

attackHandler = () => {
    attackMonster('NORMAL_ATTACK')
}

strongAttackHandler = () => {
    attackMonster('STRONG_ATTACK')
}


attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)