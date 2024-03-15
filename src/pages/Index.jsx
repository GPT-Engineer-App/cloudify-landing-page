import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaChartLine, FaShieldAlt, FaCloudUploadAlt } from "react-icons/fa";

const features = [
  {
    title: "Analytics",
    text: "Gain insights into your business with powerful analytics.",
    icon: FaChartLine,
  },
  {
    title: "Security",
    text: "Keep your data safe and secure with our advanced security measures.",
    icon: FaShieldAlt,
  },
  {
    title: "Cloud Storage",
    text: "Store and access your files from anywhere with our cloud storage solution.",
    icon: FaCloudUploadAlt,
  },
];

const Index = () => {
  return (
    <Box>
      <Box bg="purple.600" color="white" py={16}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex={1} mb={{ base: 8, md: 0 }}>
              <Heading as="h1" size="2xl" mb={4}>
                Supercharge Your Business
              </Heading>
              <Text fontSize="xl" mb={6}>
                Our SaaS platform provides all the tools you need to grow your business.
              </Text>
              <Button colorScheme="white" size="lg">
                Get Started
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbGx1c3RyYXRpb258ZW58MHx8fHwxNzEwNDk2MzEwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="SaaS Platform" />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Key Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {features.map((feature, index) => (
              <Box key={index} bg="gray.50" p={6} rounded="md" textAlign="center">
                <Icon as={feature.icon} boxSize={12} color="purple.600" mb={4} />
                <Heading as="h3" size="lg" mb={4}>
                  {feature.title}
                </Heading>
                <Text>{feature.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Box textAlign="center" mb={8}>
            <Heading as="h2" size="xl" mb={4}>
              Ready to Get Started?
            </Heading>
            <Text fontSize="xl">Sign up now and take your business to the next level.</Text>
          </Box>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="center">
            <Button colorScheme="purple" size="lg">
              Start Free Trial
            </Button>
            <Button size="lg">Learn More</Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
