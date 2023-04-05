import { prisma } from '@/src/lib/prisma'
import { Avatar, Heading, Text } from '@ignite-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ScheduleForm } from './ScheduleForm'
import { ScheduleContainer, ScheduleUserHeader } from './styles'

interface ScheduleProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export default function Schedule({ user }: ScheduleProps) {
  return (
    <ScheduleContainer>
      <ScheduleUserHeader>
        <Avatar src={user.avatarUrl} alt={user.name} />
        <Heading>{user.name}</Heading>
        <Text>{user.bio}</Text>
      </ScheduleUserHeader>
      <ScheduleForm />
    </ScheduleContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 1 dia
  }
}