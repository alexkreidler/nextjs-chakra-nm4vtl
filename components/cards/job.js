import {
  Box,
  Heading,
  Text,
  Flex,
  useMediaQuery,
  Grid,
  GridItem,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Button,
  TagCloseButton,
  Wrap,
  WrapItem,
  HStack,
} from '@chakra-ui/react';

export const JobCard = ({
  jobTitle,
  company,
  companyLocation,
  technologies,
  description,
  benefits,
  jobType,
  companyStaff,
  workLocationType,
}) => {
  /* Sections 
  (Header)
  -----------------------------------------------------
   1. Job title & company name and location
  -----------------------------------------------------
  (Body)
    2. Technologies 
    -----------------------------------------------------
    3. Description 
    -----------------------------------------------------
    4. Benefits and job.
    -----------------------------------------------------
    5. Tag location e.g remote
    -----------------------------------------------------
  (Meta)
  bookmark.  more info. apply 
  -----------------------------------------------------



  */

  const [isLessThan780] = useMediaQuery('(max-width: 780px)');
  console.log(technologies);
  return (
    <Box>
      {isLessThan780 ? (
        <Box bg="white" maxW="100%" p="24px" width>
          <Grid mb={3} templateColumns="repeat(7,2fr)" gap={'4'}>
            <GridItem>
              <img src="text.png" alt="logo" />
            </GridItem>
            <GridItem colSpan={6}>
              <a href="#">
                <Heading as="h4" size="md">
                  {jobTitle}
                </Heading>
              </a>
              <Box w="100%" color="#728088">
                <Text
                  fontSize="sm"
                  overflow="hidden"
                >{`${company}${companyLocation}`}</Text>
              </Box>
            </GridItem>
          </Grid>
          <Box mb={5}>
            <Wrap mb={3}>
              {technologies.map((item) => (
                <WrapItem>
                  <Tag
                    fontWeight="400"
                    size="lg"
                    colorScheme="red"
                    borderRadius="sm"
                  >
                    <TagLabel>{item}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
            <Flex mb={3}>
              {/* Technologies */}
              <Text fontSize="sm">{description}</Text>
            </Flex>

            <Grid templateColumns="repeat(3, 1fr)">
              <GridItem colSpan={2}>
                <Text fontSize="sm" fontWeight="600">
                  {benefits}
                </Text>
              </GridItem>
              <GridItem>
                <Text fontSize="sm">{jobType}</Text>
              </GridItem>
              <GridItem>
                <Text fontSize="sm">{companyStaff} Staff</Text>
              </GridItem>
            </Grid>
          </Box>
          <Box mb={5}>
            <Tag size="lg" colorScheme="cyan" borderRadius="sm">
              <TagLabel>{workLocationType}</TagLabel>
            </Tag>
          </Box>
          <Flex align="center" justifyContent="space-between">
            <Button>mark</Button>
            <Box>
              <HStack>
                <Button
                  fontSize="sm"
                  variant="outline"
                  colorScheme="red"
                  borderRadius="md"
                >
                  More Info
                </Button>
                <Button
                  fontSize="sm"
                  colorScheme="red"
                  color="white"
                  borderRadius="md"
                >
                  Apply
                </Button>
              </HStack>
            </Box>
          </Flex>
        </Box>
      ) : (
        // Larg screens
        <Box bg="white" maxW="100%" p="24px" rounded="md">
          <Grid mb={3} templateColumns="repeat(7,2fr)" gap={'4'}>
            <GridItem>
              <img src="text.png" alt="logo" />
            </GridItem>
            <GridItem colSpan={6}>
              <a href="#">
                <Heading as="h4" size="md">
                  {jobTitle}
                </Heading>
              </a>
              <Box w="100%" color="#728088">
                <Text
                  fontSize="sm"
                  overflow="hidden"
                >{`${company}${companyLocation}`}</Text>
              </Box>
            </GridItem>
          </Grid>
          <Box mb={5}>
            <Wrap mb={3}>
              {technologies.map((item) => (
                <WrapItem>
                  <Tag
                    fontWeight="400"
                    size="lg"
                    colorScheme="red"
                    borderRadius="sm"
                  >
                    <TagLabel>{item}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
            <Flex mb={3}>
              {/* Technologies */}
              <Text fontSize="sm">{description}</Text>
            </Flex>

            <Wrap justifyContent="space-between">
              <WrapItem>
                <Text fontSize="sm" fontWeight="600">
                  {benefits}
                </Text>
              </WrapItem>
              <WrapItem>
                <Text fontSize="sm">{jobType}</Text>
              </WrapItem>
              <WrapItem>
                <Text fontSize="sm">{companyStaff} Staff</Text>
              </WrapItem>
            </Wrap>
          </Box>
          <Box mb={5}>
            <Tag size="lg" colorScheme="cyan" borderRadius="sm">
              <TagLabel>{workLocationType}</TagLabel>
            </Tag>
          </Box>
          <Flex align="center" justifyContent="space-between">
            <Button>mark</Button>
            <Box>
              <HStack>
                <Button
                  fontSize="sm"
                  variant="outline"
                  colorScheme="red"
                  borderRadius="md"
                >
                  More Info
                </Button>
                <Button
                  fontSize="sm"
                  colorScheme="red"
                  color="white"
                  borderRadius="md"
                >
                  Apply
                </Button>
              </HStack>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};
