const initialState = {
  data: [],
  isLoad: false,
};

function Reg(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_USER":
      console.log("hello");
      let user = action.payload;
      console.log(user);

      (async () => {
        const rawResponse = await fetch(
          "https://secure-refuge-14993.herokuapp.com/add_user",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
          }
        );
        const content = await rawResponse.json();

        console.log(content);
      })();

      return {
        ...state,
        users: [...state.data, user]
      };
  }

  return state;
}

export default Reg;
