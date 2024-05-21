import { Container, Text, VStack, Link, Box, Badge } from "@chakra-ui/react";

const domains = [
  { name: "Fayrin.biz", available: true },
  { name: "Zareth.io", available: true },
  { name: "Myralyn.com", available: false },
  { name: "Quendra.net", available: true },
  { name: "Velyra.org", available: false },
  { name: "Thalun.biz", available: true },
  { name: "Saphia.io", available: false },
  { name: "Kyrala.com", available: true },
  { name: "Nymera.net", available: false },
  { name: "Elaris.org", available: true },
  { name: "Lythera.biz", available: false },
  { name: "Xandis.io", available: true },
  { name: "Zephyra.com", available: false },
  { name: "Kylora.net", available: true },
  { name: "Mirath.org", available: false },
  { name: "Zorina.biz", available: true },
  { name: "Elyria.io", available: false },
  { name: "Jynara.com", available: true },
  { name: "Quinthia.net", available: false },
  { name: "Myrion.org", available: true },
  { name: "Vyndra.biz", available: false },
  { name: "Thalara.io", available: true },
  { name: "Veluna.com", available: false },
  { name: "Xeryth.net", available: true },
  { name: "Alindra.org", available: false },
  { name: "Kymara.biz", available: true },
  { name: "Nylandra.io", available: false },
  { name: "Pythera.com", available: true },
  { name: "Lythian.net", available: false },
  { name: "Vylara.org", available: true },
  { name: "Sylvara.biz", available: false },
  { name: "Aerith.io", available: true },
  { name: "Xynara.com", available: false },
  { name: "Lyandra.net", available: true },
  { name: "Myrith.org", available: false },
  { name: "Qyra.biz", available: true },
  { name: "Zoryth.io", available: false },
  { name: "Elyndra.com", available: true },
  { name: "Thalira.net", available: false },
  { name: "Vinyra.org", available: true },
  { name: "Delyra.biz", available: false },
  { name: "Xyneth.io", available: true },
  { name: "Marithra.com", available: false },
  { name: "Lynira.net", available: true },
  { name: "Sylthia.org", available: false },
  { name: "Feydra.biz", available: true },
  { name: "Thalyra.io", available: false },
  { name: "Kynora.com", available: true },
  { name: "Velyndra.net", available: false },
  { name: "Xariel.org", available: true },
  { name: "Elydra.biz", available: false },
  { name: "Zynara.io", available: true },
  { name: "Lirath.com", available: false },
  { name: "Myndra.net", available: true },
  { name: "Qylera.org", available: false },
  { name: "Xylaria.biz", available: true },
  { name: "Vyndeth.io", available: false },
  { name: "Rylora.com", available: true },
  { name: "Thysera.net", available: false },
  { name: "Qynith.org", available: true },
  { name: "Sylara.biz", available: false },
  { name: "Kylindra.io", available: true },
  { name: "Therith.com", available: false },
  { name: "Pyldra.net", available: true },
  { name: "Vynara.org", available: false },
  { name: "Xalira.biz", available: true },
  { name: "Fylindra.io", available: false },
  { name: "Mylith.com", available: true },
  { name: "Thynara.net", available: false },
  { name: "Qynara.org", available: true },
  { name: "Jyndra.biz", available: false },
  { name: "Kylera.io", available: true },
  { name: "Myranth.com", available: false },
  { name: "Lythera.net", available: true },
  { name: "Zylara.org", available: false },
  { name: "Thylindra.biz", available: true },
  { name: "Elyria.io", available: false },
  { name: "Xyrith.com", available: true },
  { name: "Lynora.net", available: false },
  { name: "Phylara.org", available: true },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="3xl" fontWeight="bold" mb={6}>
          Domain Name Suggestions for Startups
        </Text>
        {domains.map((domain, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link
              href={`https://www.namecheap.com/domains/registration/results/?domain=${domain.name}`}
              isExternal
              fontSize="xl"
              fontWeight="semibold"
            >
              {domain.name}
            </Link>
            <Badge colorScheme={domain.available ? "green" : "red"}>
              {domain.available ? "Available" : "Taken"}
            </Badge>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;