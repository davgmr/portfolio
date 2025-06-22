import React from 'react';
import { Search, Palette, Code2, TestTube, TrendingUp, Zap, Users, Layers, Award } from 'lucide-react';
import Container from '../../common/Container';
import Card from '../../common/Card';
import { CONTENT } from '../../../constants';

const Process = () => {
  const stepIcons = [Search, Palette, Code2, TestTube, TrendingUp];
  const principleIcons = [Zap, Users, Layers, Award];

  return (
    <section id="process" className="py-20 bg-white">
      <Container>
        {/* Processo */}
        <div className="mb-20">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
              {CONTENT.process.title}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Uma metodologia estruturada para garantir o sucesso do seu projeto
            </p>
          </div>

          <div className="space-y-8">
            {CONTENT.process.steps.map((step, index) => {
              const Icon = stepIcons[index];
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Conteúdo */}
                  <div className={`space-y-4 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg font-bold">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Ícone Visual */}
                  <div className={`flex justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                      <Icon size={48} className="text-primary-600" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Princípios */}
        <div>
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
              {CONTENT.principles.title}
            </h3>
            <p className="text-lg text-neutral-600">
              Os valores que guiam cada decisão no desenvolvimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTENT.principles.items.map((principle, index) => {
              const Icon = principleIcons[index];
              
              return (
                <Card key={index} hover className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl">
                    <Icon size={28} />
                  </div>
                  
                  <h4 className="font-bold text-neutral-900 text-lg">
                    {principle.title}
                  </h4>
                  
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;