#include <iostream>
#include <unistd.h>
#include <fstream>

using namespace std;

class GerenciadorProcessos
{
    string comandoAnterior = " ";

public:
    void atualizarDados();

private:
    void lerComando();
    void salvarTabela();
    void monitorarCPU();
};

void GerenciadorProcessos::atualizarDados()
{
    while (1)
    {
        salvarTabela();
        sleep(1);
        lerComando();
        monitorarCPU();
    }
}

void GerenciadorProcessos::salvarTabela()
{
    system("top -b -n 1 | awk 'NR>6' | sed -n '{s/^ *//;s/ *$//;s/  */;/gp;};' > gerenciadorProcessos.txt");
}

void GerenciadorProcessos::lerComando()
{
    ifstream arquivoComando;
    string linha;
    arquivoComando.open("comando.txt");

    if (arquivoComando.is_open())
    {
        while (getline(arquivoComando, linha))
        {
            if (linha.compare(this->comandoAnterior) != 0)
            {
                cout << "linha : " + linha << endl;
                cout << "comando anterior: " + this->comandoAnterior << endl;
                cout << "comando : " + linha << endl;
                system((linha).c_str());
                this->comandoAnterior = linha;
            }
        }
        arquivoComando.close();
    }
    else
    {
        cout << "Nao foi possivel abrir o arquivo!" << endl;
    }
}

void GerenciadorProcessos::monitorarCPU()
{
    system("top -1 -b -n 1 | sed -n '3, 6{s/^ *//;s/ *$//;s/  */;/gp;};' > monitorarCPU.txt");
}