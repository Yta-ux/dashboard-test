import styled from "styled-components";

export const Container = styled.div`

  @media (min-width: 0){    
    .sidebar{
      display: none;
    }
    
    .bottom-bar{
      display: block;
    }
}

    @media (min-width: 620px){  
      display: flex;
      gap: 1.9rem;

    .sidebar{
      display: block;
    }
    
    .bottom-bar{
      display: none;
    }
}
`

export const Wrapper = styled.div`

  @media (min-width: 0){
    padding: 1rem 1.5rem 0;
    width: 100%;
    
    .nameSection{
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 2.7rem;
        text-align: center;
    }

    .cards{
    
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(5, auto);

    .card:nth-child(1){
      grid-column: 1/7;
      grid-row: 1;
      margin-bottom: 2rem;
    }

    .card:nth-child(2){
      display: none;
    }

    .card:nth-child(3){
      grid-column: 1/7;
      grid-row: 2;
      margin-bottom: 2rem;
    }

    .card:nth-child(4){
      grid-column: 1/7;
      grid-row: 3;
      margin-left: .5rem;
    }

    .card:nth-child(5){
      grid-column: 1/7;
      grid-row: 5;
      margin-top: 2rem;

    }

    .card:nth-child(6){
      grid-column: 1/7;
      grid-row: 4;
      margin-top: 2rem;
      }
    }
}

  @media (min-width: 620px){

    .nameSection{
        text-align: left;
    }
  }

  @media (min-width: 980px){
    padding: 3.3rem 2.6rem 5.6rem 0;

    .cards{

      .card:nth-child(2){
        display: block;
        grid-column: 1/4;
        grid-row: 3;
        margin-right: .5rem;
      }

      .card:nth-child(4){
        grid-column: 4/7;
        }
      }
  }

  @media (min-width: 1100px){
    .cards{
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, auto);

    .card:nth-child(1){
      grid-column: 1/5;
      grid-row: 1;
      margin-bottom: 1rem;
      margin-right: 2.9rem;
    }

    .card:nth-child(2){
      grid-column: 5;
      grid-row: 1;
      margin-bottom: 1rem;
      margin-right: 0;
    }

    .card:nth-child(3){
      grid-column: 1/3;
      margin-bottom: 0;
      margin-right: 1.5rem;
    }

    .card:nth-child(4){
      grid-column: 3/5;
      grid-row: 2;
      margin-left: 0;
      margin-right: 2.9rem;
    }

    .card:nth-child(5){
      grid-column: 5;
      grid-row: 2/4;
      margin-top: 0;
    }

    .card:nth-child(6){
      grid-column: 1/5;
      grid-row: 3;
      margin-right: 2.9rem;
      margin-top: 1.9rem;
    }
  }
}
`