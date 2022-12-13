import data from "../../data/question";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

function index() {
  const router = useRouter();
  const quizId = router.query.indexId;
  const id = Number(quizId);
  //Acertos
  const [hits, setHits] = useState(0);
  //troca
  let [change, setChange] = useState(true);
  return (
    <div className="game">
      {/* Se o id for igual ao id da pagina retornar div com os elementos */}
      {id == id ? (
        <div>
          <h1 className="questions">{data[id].question}</h1>
          <p>Acertos {hits}</p>
          {data[id].options.map((e) => (
            <p
              className="options"
              id={e}
              // Evento pega a resposta e compara com o resultado escolhido
              onClick={(event) => {
                if (data[id].answer == event.target.id) {
                  if (change == true) {
                    event.target.id = "optionCorrect";
                    setHits(hits + 1);
                  }
                  console.log(event.target.id);
                  setChange((change = false));
                } else {
                  change == true ? (event.target.id = "optionIncorrect") : null;
                  setChange((change = false));
                }
              }}
            >
              {e}
            </p>
          ))}
          {/* Enquanto a troca não for permitida não mostrar o botão */}
          {change == false ? (
            id < 4 ? (
              <Link href={`${id + 1}`}>
                <button
                  className="button"
                  onClick={() => setChange((change = true))}
                >
                  Next
                </button>
              </Link>
            ) : (
              <Link href={`/finish/${hits}`}>
                <button className="button">Finish</button>
              </Link>
            )
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default index;
