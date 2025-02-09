import { Box, Button } from '@pangolindex/components'
import styled from 'styled-components'

export const Card = styled(Box)`
  /* width: 480px; */
  padding: 25px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${({ theme }) => theme.bg2};

  & img {
    border-radius: 100px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 100%;
    margin-bottom: 22px;
  `};
`

export const CardHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.text8};
`

export const Stats = styled(Box)``

export const CardStats = styled(Box)`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 20px;
  padding: 20px 0 0px;
`

export const TokenName = styled(Box)`
  font-weight: 800;
  font-size: 28px;
  line-height: 33px;
  color: ${({ theme }) => theme.text7};
`

export const StakeButton = styled(Button)`
  background-color: ${({ theme }) => theme.bg8} !important;
  height: 46px;
  border-radius: 4px !important;
  font-size: 16px;
`

export const DetailButton = styled(Button)`
  border: solid 1px ${({ theme }) => theme.text1} !important;
  height: 46px;
  border-radius: 4px !important;
  font-size: 16px;
`
