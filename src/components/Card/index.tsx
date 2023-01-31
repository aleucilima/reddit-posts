import React from 'react';

import { CardProps } from '../../interfaces/card';

import {
  Container,
  ImageContainer,
  Img,
  Content,
  Title,
  Author,
  TotalVotes,
  Commits,
  CreatedAt,
  Icons,
  Item,
  Details,
  SectionAuthor,
  SectionItems
} from './styles';

export function Card({ data, onPress }: CardProps) {
  const createdAt_formatted = new Date(data.created * 1000).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const title_formatted = data.title?.length > 50 ? `${data.title.substring(0, 50)}...` : data.title;
  const author_formatted = data.author_fullname?.length > 15 ? `${data.author_fullname?.substring(0, 15)}...` : data.author_fullname;

  return (
    <Container onPress={onPress}>
      <ImageContainer>
        { 
          data.thumbnail &&
          data?.thumbnail?.length > 0 &&
            <Img 
              source={{ uri: data?.thumbnail }}
            />
        }
      </ImageContainer>
      <Content>
        <CreatedAt>{createdAt_formatted}</CreatedAt>
        <Title>{title_formatted}</Title>
        <Details>
          <SectionAuthor>
            <Author>{author_formatted}</Author>
          </SectionAuthor>
          <SectionItems>
            <Item>
              <Icons name="check-circle" />
              <TotalVotes>{data.ups}</TotalVotes>
            </Item>
            <Item>
            <Icons name="message-circle" />
              <Commits>{data.num_comments}</Commits>
            </Item>
          </SectionItems>
        </Details>
      </Content>
    </Container>
  );
}