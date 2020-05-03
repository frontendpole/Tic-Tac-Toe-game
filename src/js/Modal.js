export default class Modal {
    constructor(winner) {
        this.winner = winner;
        this.createModal = this.createModal(winner);
        this.openModal = this.openModal();
    }

    createModal(winner) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        document.body.append(modal);
        const modalMessage = document.createElement('div');
        modalMessage.classList.add('modal-message');
        const congrats = document.createElement('h1');
        congrats.innerHTML = "Congratulations!";
        const winnerInfo = document.createElement('h2');
        winnerInfo.innerHTML = `${winner} is the winner!`;
        const playAgain = document.createElement('h3');
        playAgain.innerHTML = `Press "new game" to play again!`;
        modalMessage.append(congrats, winnerInfo, playAgain);
        modal.appendChild(modalMessage);
        const closeButton = document.createElement('button');
        closeButton.textContent = "CLOSE";
        modal.appendChild(closeButton);
        closeButton.addEventListener("click", this.closeModal);
    }

    openModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('open-modal');
    }

    closeModal() {
        const modal = document.querySelector('.modal');
        document.body.removeChild(modal);
    }
}