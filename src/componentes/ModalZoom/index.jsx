import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const OverLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogSytled = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

const ModalZoom = ({ foto, aoAlterarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <OverLayer />
          <DialogSytled open={!!foto}>
            <Imagem
              foto={foto}
              expandida={true}
              aoAlterarFavorito={aoAlterarFavorito}
            />
            <p>X@</p>
            <form method="dialog">
              <button>X</button>
            </form>
          </DialogSytled>
        </>
      )}
    </>
  );
};

export default ModalZoom;
