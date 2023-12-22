function FeedbackForm() {
  return (
      <form>
          <label>
              Envie-nos seu feedback, dúvidas ou sugestões:<br />
              <textarea cols="50" rows="5"/>
          </label>
          <br /><br />
          <label>
              Seu contato:<br />
              <input type="text" />
          </label>
          <br /><br />
          <input type="submit" value="Enviar" />
      </form>);
}

export { FeedbackForm };