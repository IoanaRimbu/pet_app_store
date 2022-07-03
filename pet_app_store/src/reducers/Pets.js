let intialState = {pets: null, isLoading: false, recivedPets: false};

const pets = (state = intialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'RECIVE_PETS_SUCCESS':
      return {
        ...state,
        pets: payload,
        error: null,
        isLoading: false,
        recivedPets: true,
      };
    case 'RECIVE_PETS_FAILURE':
      return {
        ...state,
        error: payload,
        pets: null,
        isLoading: false,
        recivedPets: false,
      };
    case 'REQUEST_PETS':
      return {
        ...state,
        isLoading: true,
      };
    case 'CREATE_PETS_SUCCESS':
      return {
        ...state,
        pet: payload,
        error: null,
        isLoading: false,
        recivedPet: true,
      };
    case 'CREATE_PETS_FAILURE':
      return {
        ...state,
        error: payload,
        pet: null,
        isLoading: false,
        recivedPet: false,
      };
    default:
      return state;
  }
};

export default pets;
