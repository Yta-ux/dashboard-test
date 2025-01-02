import styled from "styled-components";

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const ContainerLarge = styled(Container)`
  .titleLarge {
    margin-top: 0.8rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.1rem;
`;

export const Description = styled.p`
  color: var(--description);
  font-size: 1.2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1.1rem;
`;

export const WrapperLarge = styled(Wrapper)`
  padding: 1.5rem 0rem 0 3.2rem;

  @media (min-width: 0) {
    .select {
      display: none;
    }
  }

  @media (min-width: 520px) {
    .mini-select {
      display: none;
    }

    .select {
      display: block;
    }
  }
`;

export const WrapperLargeIcon = styled(Wrapper)`
  padding: 1rem 1.7rem 0 1.6rem;

  @media (min-width: 0) {
    .select {
      display: none;
    }
  }

  @media (min-width: 520px) {
    .mini-select {
      display: none;
    }

    .select {
      display: block;
    }
  }
`;

export const IconSettings = styled.img`
  cursor: pointer;
  transition: all 1.5s ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(360deg);
  }
`;
