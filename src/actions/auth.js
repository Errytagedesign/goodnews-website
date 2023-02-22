import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signIn =
  (formData, history, setLoading, setError) => async (dispatch) => {
    try {
      setLoading(true);

      const { data } = await api.signIn(formData);

      dispatch({ type: AUTH, data });

      history.push("/");
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
      console.log(e);
    }
  };

export const signUp =
  (formData, history, setLoading, setError) => async (dispatch) => {
    try {
      setLoading(true);
      const { data } = await api.signUp(formData);

      dispatch({ type: AUTH, data });

      history.push("/");
    } catch (e) {
      setError(e);
      setLoading(false);
      console.log(e);
    }
  };
