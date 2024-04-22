import { useGetAuthUserQuery } from "../../api/projectApiSlice";

const useIsAuth = () => {
  const { data } = useGetAuthUserQuery();
  return data?.isAuth;
};

export default useIsAuth;
