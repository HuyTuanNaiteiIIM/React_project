import {
    Box,
    Button,
    FormControl,
    Input,
    Text,
    VStack,
    HStack,
    Checkbox,
    Tag

  } from "@chakra-ui/react";
  import { faCircle } from "@fortawesome/free-solid-svg-icons";

  import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useEffect, useState } from "react";
  import BrandChild from "./BrandChild/brandChild";
  import { getBrands } from "../../../../services/filterServices";
  export default function BrandFilter(props) {
    const [searchKey, setSearchKey] = useState("");
    const [brands, setBrands] = useState([]);
    // const brands = useSelector((state) => state.filter.brands);
  const dispatch = dispatch();
  const handleBrandClick = () => {
    // eslint-disable-next-line no-undef
    if (brands.includes(item.name)) {
      // eslint-disable-next-line no-undef
      dispatch(setBrandsRedux(brands.filter((brand) => brand !== item.name)));
    } else {
      // eslint-disable-next-line no-undef
      dispatch(setBrandsRedux([...brands, item.name]));
    }
  };
    useEffect(() => {
      const fetchBrands = async () => {
        try {
          const res = await getBrands();
          setBrands(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchBrands();
    }, []);
    return (
      <>
        <VStack w="100%" alignItems="flex-start" pt="32px" pb="32px">
          <Text fontSize="11px" fontWeight="500" letterSpacing="1px">
            BRANDS
          </Text>
          <Box
            as="form"
            borderRadius="10px"
            bottom="-32px"
            w="100%"
            pt="16px"
            pb="16px"
          >
            <FormControl
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="darkGray.60"
              height="40px"
              borderRadius="2px"
            >
              <Button
                type="submit"
                bgColor="transparent"
                _hover={{ bgColor: "transparent" }}
              >
                <Box color="dark.500" fontSize="12px">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Box>
              </Button>
              <Input
                border="none"
                fontSize="12px"
                color="dark.800"
                bgColor="transparent"
                size="lg"
                p="0"
                _focus={{ boxShadow: "none" }}
                placeholder="Search for brands..."
                _placeholder={{ color: "dark.400" }}
                value={searchKey}
                onChange={(e) => {
                  setSearchKey(e.target.value);
                }}
              />
            </FormControl>
          </Box>
          <VStack as="ul" alignItems="flex-start">
            {brands
              .filter((item) => {
                return searchKey.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(searchKey.toLowerCase());
              })
              .map((item, index) => {
                if (index > 9) return null;
                return (
                       <>
      <Checkbox
        isChecked={brands.includes(item.name) ? true : false}
        icon={
          <Box fontSize="5px">
            <FontAwesomeIcon icon={faCircle} />
          </Box>
        }
        onChange={() => handleBrandClick()}
      >
        <HStack
          as="button"
          gap="0"
          ml="8px"
          pointerEvents="none"
          cursor="pointer"
        >
          <Text
            sx={styles.title}
            fontWeight={
              brands.includes(item.name) === item.name ? "bold" : "400"
            }
          >
            {item?.name}
          </Text>
          <Tag sx={styles.tag}>{item?.quantity}</Tag>
        </HStack>
      </Checkbox>
    </>
                )
              })}
          </VStack>
        </VStack>
      </>
    );
  }
  const styles = {
    tag: {
      fontSize: "10px",
      fontWeight: "700",
      lineHeight: "1",
      minH: "16px",
      minW: "auto",
      pl: "4px",
      pr: "4px",
      bgColor: "dark.50",
      color: "dark.800",
      borderRadius: "4px",
    },
    title: {
      color: "dark.1000",
      fontSize: "14.4px",
      mr: "8px",
    },
  };