import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
import { Layout } from "../../components/Layout";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Title = styled.h3``;

const Form = styled.form``;

const Input = styled.input``;

const ConWrap = styled.div`
  display: grid;
  /* => grid가 적용될 부모에게 사용 플렉스와 동일 */
  grid-template-columns: repeat(5, 1fr);
  /* => 그리드 레이아웃을 규칙에 맞게 반복 시킴 */
  /* => mask-repeat(가로 갯수, 크기 값) */
  /* => 1fr은 컨텐츠끼리 1배율씩 똑같은 값으로 크기를 나눠가짐 */
  column-gap: 30px;
  /* => 가로 컨텐츠 간격 */
  row-gap: 50px;
  /* => 세로 컨텐츠 간격 */
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const MovieTitle = styled.div``;

export const Search = () => {
  // api 검색 요청에 맞게 url연결과 매개변수 작성할 것
  // form 사용시 useForm을 사용할 것
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const [term, setTerm] = useState();

  const searchHandler = async (data) => {
    // console.log(data);
    const { search: keyword } = data;
    // console.log("검색결과:" + search);
    try {
      const { results } = await movieSearch(keyword);
      setTerm(results);
      console.log(data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  // console.log(term);

  return (
    <div>
      <Title style={{ marginTop: "200px" }}>찾으시는 영화가 있으신가요?</Title>

      <Form onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", {
            required: "검색 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="검색 내용"
        ></Input>
      </Form>

      <Layout>
        {term && (
          <ConWrap>
            {term.map((data) => (
              <Con key={data.id}>
                <Bg $bgUrl={data.backdrop_path}></Bg>
                <MovieTitle>{data.title}</MovieTitle>
              </Con>
            ))}
          </ConWrap>
        )}
      </Layout>
    </div>
  );
};
