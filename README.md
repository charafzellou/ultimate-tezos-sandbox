# Ultimate Tezos Sandbox

This repository aims to provide users with a Tezos Smart Contracts Development sandbox containing :
- Flextesa [2023_09_01](https://hub.docker.com/r/oxheadalpha/flextesa/tags)
- BetterCallDev Hub [4.7.0](https://github.com/baking-bad/bcdhub/releases) :
    - BCD API [4.7.0](https://github.com/baking-bad/bcdhub/pkgs/container/bcdhub-api)
    - BCD Indexer [4.7.0](https://github.com/baking-bad/bcdhub/pkgs/container/bcdhub-indexer)
    - BCD Web GUI [4.7.0](https://github.com/baking-bad/bcdhub/pkgs/container/bcdhub-gui)
- Postgres [13.3](https://hub.docker.com/_/postgres)
- PGAdmin [7.6](https://hub.docker.com/r/dpage/pgadmin4)

## Setup

In order to benefit from this repository, you need to have the following tools installed on your machine :
- [Make](https://www.gnu.org/software/make/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [LIGO v0.72.0](https://ligolang.org/docs/intro/installation/)
- [Archetype v1.4.3](https://archetype-lang.org/docs/installation/)

## Usage

You can clone this repository as a template for your Tezos project.

To see the available templates, you can use the following command :

```bash
make init
```

## Supported Tezos languages

To use the LIGO template, you can use the following command :

```bash
make init-ligo
```

To use the Archetype template, you can use the following command :

```bash
make init-archetype
```

## Known Issues:
```
```

## Contributing:
Pull requests are always welcome 🤓

For bug fixes or improvements, please open an issue and I will get back to you as soon as I can! 🔜

## License
Please cite the author [Charaf ZELLOU](https://linkedin.com/in/charafzellou/) and the source [ultimate-tezos-sandbox](https://github.com/charafzellou/ultimate-tezos-sandbox) in any copies, forks or use of the material in this repository.

[GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/) 🥐