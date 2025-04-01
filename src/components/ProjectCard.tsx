"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="m">
      <Flex
        fillWidth
        gap="l"
        wrap={true}
        mobileDirection="column"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start", // Aligns content at the top
        }}
      >
        {/* Image Section */}
        <Flex style={{ flex: "1 1 40%", maxWidth: "400px", minWidth: "250px" }}>
          <Carousel
            sizes="(max-width: 960px) 100vw, 960px"
            images={images.map((image) => ({
              src: image,
              alt: title,
            }))}
          />
        </Flex>

        {/* Text Section */}
        <Column flex={1} gap="m" style={{ flex: "1 1 55%", minWidth: "300px" }}>
          {title && (
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          )}
          {(avatars.length > 0 || description.trim() || content.trim()) && (
            <Column gap="16">
              {avatars.length > 0 && (
                <AvatarGroup avatars={avatars} size="m" reverse />
              )}
              {description.trim() && (
                <Text
                  wrap="balance"
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {description}
                </Text>
              )}
              <Flex gap="24" wrap>
                {content.trim() && (
                  <SmartLink
                    suffixIcon="arrowRight"
                    style={{ margin: "0", width: "fit-content" }}
                    href={href}
                  >
                    <Text variant="body-default-s">Read details</Text>
                  </SmartLink>
                )}
                {link && (
                  <SmartLink
                    suffixIcon="arrowUpRightFromSquare"
                    style={{ margin: "0", width: "fit-content" }}
                    href={link}
                  >
                    <Text variant="body-default-s">View project</Text>
                  </SmartLink>
                )}
              </Flex>
            </Column>
          )}
        </Column>
      </Flex>
    </Column>
  );
};
