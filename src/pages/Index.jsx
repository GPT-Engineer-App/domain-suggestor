import { Container, Text, VStack, Link, Box, Badge } from "@chakra-ui/react";

const domains = [
  { name: "Fayrin.biz", available: true, price: "$10.99" },
  { name: "Zareth.io", available: true, price: "$12.99" },
  { name: "Myralyn.com", available: false, price: "$9.99" },
  { name: "Quendra.net", available: true, price: "$11.99" },
  { name: "Velyra.org", available: false, price: "$8.99" },
  { name: "Thalun.biz", available: true, price: "$10.99" },
  { name: "Saphia.io", available: false, price: "$12.99" },
  { name: "Kyrala.com", available: true, price: "$9.99" },
  { name: "Nymera.net", available: false, price: "$11.99" },
  { name: "Elaris.org", available: true, price: "$8.99" },
  { name: "Lythera.biz", available: false, price: "$10.99" },
  { name: "Xandis.io", available: true, price: "$12.99" },
  { name: "Zephyra.com", available: false, price: "$9.99" },
  { name: "Kylora.net", available: true, price: "$11.99" },
  { name: "Mirath.org", available: false, price: "$8.99" },
  { name: "Zorina.biz", available: true, price: "$10.99" },
  { name: "Elyria.io", available: false, price: "$12.99" },
  { name: "Jynara.com", available: true, price: "$9.99" },
  { name: "Quinthia.net", available: false, price: "$11.99" },
  { name: "Myrion.org", available: true, price: "$8.99" },
  { name: "Vyndra.biz", available: false, price: "$10.99" },
  { name: "Thalara.io", available: true, price: "$12.99" },
  { name: "Veluna.com", available: false, price: "$9.99" },
  { name: "Xeryth.net", available: true, price: "$11.99" },
  { name: "Alindra.org", available: false, price: "$8.99" },
  { name: "Kymara.biz", available: true, price: "$10.99" },
  { name: "Nylandra.io", available: false, price: "$12.99" },
  { name: "Pythera.com", available: true, price: "$9.99" },
  { name: "Lythian.net", available: false, price: "$11.99" },
  { name: "Vylara.org", available: true, price: "$8.99" },
  { name: "Sylvara.biz", available: false, price: "$10.99" },
  { name: "Aerith.io", available: true, price: "$12.99" },
  { name: "Xynara.com", available: false, price: "$9.99" },
  { name: "Lyandra.net", available: true, price: "$11.99" },
  { name: "Myrith.org", available: false, price: "$8.99" },
  { name: "Qyra.biz", available: true, price: "$10.99" },
  { name: "Zoryth.io", available: false, price: "$12.99" },
  { name: "Elyndra.com", available: true, price: "$9.99" },
  { name: "Thalira.net", available: false, price: "$11.99" },
  { name: "Vinyra.org", available: true, price: "$8.99" },
  { name: "Delyra.biz", available: false, price: "$10.99" },
  { name: "Xyneth.io", available: true, price: "$12.99" },
  { name: "Marithra.com", available: false, price: "$9.99" },
  { name: "Lynira.net", available: true, price: "$11.99" },
  { name: "Sylthia.org", available: false, price: "$8.99" },
  { name: "Feydra.biz", available: true, price: "$10.99" },
  { name: "Thalyra.io", available: false, price: "$12.99" },
  { name: "Kynora.com", available: true, price: "$9.99" },
  { name: "Velyndra.net", available: false, price: "$11.99" },
  { name: "Xariel.org", available: true, price: "$8.99" },
  { name: "Elydra.biz", available: false, price: "$10.99" },
  { name: "Zynara.io", available: true, price: "$12.99" },
  { name: "Lirath.com", available: false, price: "$9.99" },
  { name: "Myndra.net", available: true, price: "$11.99" },
  { name: "Qylera.org", available: false, price: "$8.99" },
  { name: "Xylaria.biz", available: true, price: "$10.99" },
  { name: "Vyndeth.io", available: false, price: "$12.99" },
  { name: "Rylora.com", available: true, price: "$9.99" },
  { name: "Thysera.net", available: false, price: "$11.99" },
  { name: "Qynith.org", available: true, price: "$8.99" },
  { name: "Sylara.biz", available: false, price: "$10.99" },
  { name: "Kylindra.io", available: true, price: "$12.99" },
  { name: "Therith.com", available: false, price: "$9.99" },
  { name: "Pyldra.net", available: true, price: "$11.99" },
  { name: "Vynara.org", available: false, price: "$8.99" },
  { name: "Xalira.biz", available: true, price: "$10.99" },
  { name: "Fylindra.io", available: false, price: "$12.99" },
  { name: "Mylith.com", available: true, price: "$9.99" },
  { name: "Thynara.net", available: false, price: "$11.99" },
  { name: "Qynara.org", available: true, price: "$8.99" },
  { name: "Jyndra.biz", available: false, price: "$10.99" },
  { name: "Kylera.io", available: true, price: "$12.99" },
  { name: "Myranth.com", available: false, price: "$9.99" },
  { name: "Lythera.net", available: true, price: "$11.99" },
  { name: "Zylara.org", available: false, price: "$8.99" },
  { name: "Thylindra.biz", available: true, price: "$10.99" },
  { name: "Elyria.io", available: false, price: "$12.99" },
  { name: "Xyrith.com", available: true, price: "$9.99" },
  { name: "Lynora.net", available: false, price: "$11.99" },
  { name: "Phylara.org", available: true, price: "$8.99" },
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
            {domain.available && <Text fontSize="md" color="gray.500" ml={2}>{domain.price}</Text>}
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