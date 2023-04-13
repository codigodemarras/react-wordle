import "./styels.scss";

interface Props {
  openWinnerModal: boolean;
}

function WinnerModal({ openWinnerModal }: Props) {
  if (!openWinnerModal) {
    return null;
  }

  return (
    <div className="winnerModal">
      <div className="modalBg"></div>

      <div className="modalContent">
        <h4 className="title">Ganaste!</h4>
        <p className="description">Si querés jugar de nuevo, reiniciá el juego.</p>

        <button
          className="btn"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default WinnerModal;
