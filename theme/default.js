const initialDefault = {
  card: {
    content: `
      width: 100%;
      padding: 0 10px;
    `,
    body: `
      display: flex;
      flex-wrap: wrap;
      color: darkslategray;
      margin: 0 15px;
      border-radius: 5px;
      border-color: lightgray;
      border-style: solid;
      border-width: 1px;
      box-shadow: 5px 5px 18px darkgray;
    `,
    desc: `
      font-family: Helvetica;
      font-weight: bold;
    `
  }
}

const theme = {
  card: {
    content: initialDefault.card.content,
    xs: {
      desc: `
        ${initialDefault.card.desc}
        font-size: 10px;
      `,
      body: `
        ${initialDefault.card.body}
        width: 200px;
        height: 250px;
      `
    },
    sm: {
      desc: `
        ${initialDefault.card.desc}
        font-size: 12px;
      `,
      body: `
        ${initialDefault.card.body}
        width: 250px;
        height: 300px;
      `
    },
    md: {
      desc: `
        ${initialDefault.card.desc}
        font-size: 14px;
      `,
      body: `
        ${initialDefault.card.body}
        width: 300px;
        height: 350px;
      `
    },
    lg: {
      desc: `
        ${initialDefault.card.desc}
        font-size: 18px;
      `,
      body: `
        ${initialDefault.card.body}
        width: 350px;
        height: 400px;
      `
    },
    xl: {
      desc: `
        ${initialDefault.card.desc}
        font-size: 22px;
      `,
      body: `
        ${initialDefault.card.body}
        width: 400px;
        height: 450px;
      `
    },
  }
}

export default theme
