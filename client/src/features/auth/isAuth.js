import { useGetAuthUserQuery } from "../../api/projectApiSlice";

const useIsAuth = async () => {
  const { data } = useGetAuthUserQuery();
  return await data?.isAuth;
};

export default useIsAuth;
